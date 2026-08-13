import sqlite3
import tempfile
import unittest
from pathlib import Path

from waitlist_api import CONSENT_VERSION, RateLimiter, WaitlistStore, normalize_email


class WaitlistApiTests(unittest.TestCase):
    def test_normalizes_email(self):
        self.assertEqual(normalize_email("  Drake@Example.COM "), "drake@example.com")

    def test_rejects_invalid_email(self):
        for value in ("", "drake", "@example.com", "drake@example"):
            with self.subTest(value=value), self.assertRaises(ValueError):
                normalize_email(value)

    def test_store_is_insert_only_and_deduplicates(self):
        with tempfile.TemporaryDirectory() as temp_dir:
            database = str(Path(temp_dir) / "waitlist.sqlite3")
            store = WaitlistStore(database)
            self.assertTrue(store.add("drake@example.com", CONSENT_VERSION))
            self.assertFalse(store.add("drake@example.com", CONSENT_VERSION))
            with sqlite3.connect(database) as connection:
                row = connection.execute(
                    "select email, consent_version from waitlist_signups"
                ).fetchone()
            self.assertEqual(row, ("drake@example.com", CONSENT_VERSION))

    def test_rate_limiter_closes_after_limit(self):
        limiter = RateLimiter(limit=2, window_seconds=60)
        self.assertTrue(limiter.allow("test"))
        self.assertTrue(limiter.allow("test"))
        self.assertFalse(limiter.allow("test"))


if __name__ == "__main__":
    unittest.main()
