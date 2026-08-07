-- Reference only: run this once in the Neon SQL console.
-- The app never executes DDL.

CREATE TABLE IF NOT EXISTS notify_signups (
  id         BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name       TEXT NOT NULL,
  email      TEXT NOT NULL,
  message    TEXT NOT NULL DEFAULT '',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE UNIQUE INDEX IF NOT EXISTS notify_signups_email_key
  ON notify_signups (lower(email));
