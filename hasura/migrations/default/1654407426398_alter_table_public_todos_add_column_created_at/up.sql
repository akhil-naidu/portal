alter table "public"."todos" add column "created_at" timestamptz
 not null default now();
