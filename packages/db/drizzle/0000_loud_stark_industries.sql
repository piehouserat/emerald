CREATE TABLE "users" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"emailVerified" boolean,
	"avatar_url" text,
	CONSTRAINT "users_email_key" UNIQUE("email")
);
