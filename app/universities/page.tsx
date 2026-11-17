import { PageHero } from "@/components/PageHero";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { UniversityFilters } from "@/components/UniversityFilters";

export const metadata = { title: "Universities" };

export default async function UniversitiesPage({
  searchParams,
}: {
  searchParams: Promise<{ country?: string }>;
}) {
  const { country } = await searchParams;
  return (
    <>
      <PageHero title="Universities" breadcrumb="Universities">
        <p>
          Browse and filter universities across our six destinations.{" "}
          <Badge variant="sample">Sample catalogue</Badge>
        </p>
      </PageHero>
      <section className="py-12">
        <Container>
          <UniversityFilters initialCountry={country ?? ""} />
        </Container>
      </section>
    </>
  );
}
