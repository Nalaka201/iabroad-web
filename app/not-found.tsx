import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="py-24">
      <Container className="text-center">
        <div className="mb-3 text-5xl opacity-60" aria-hidden>
          🧭
        </div>
        <h1 className="mb-2 text-3xl font-extrabold text-primary">
          Page not found
        </h1>
        <p className="mx-auto mb-6 max-w-md text-muted">
          The page you were looking for doesn&apos;t exist. It may have moved,
          or the link you followed is out of date.
        </p>
        <ButtonLink href="/" variant="primary">
          Back to home
        </ButtonLink>
        <div className="mt-4 text-sm">
          <Link href="/universities" className="text-primary hover:text-accent-deep">
            Browse universities →
          </Link>
        </div>
      </Container>
    </section>
  );
}
