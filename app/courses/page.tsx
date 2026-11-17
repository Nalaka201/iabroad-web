import { PageHero } from "@/components/PageHero";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { CourseFilters } from "@/components/CourseFilters";

export const metadata = { title: "Courses" };

export default async function CoursesPage({
  searchParams,
}: {
  searchParams: Promise<{ country?: string }>;
}) {
  const { country } = await searchParams;
  return (
    <>
      <PageHero title="Courses" breadcrumb="Courses">
        <p>
          Search by country, university, level, field and tuition budget.{" "}
          <Badge variant="sample">Sample catalogue</Badge>
        </p>
      </PageHero>
      <section className="py-12">
        <Container>
          <CourseFilters initialCountry={country ?? ""} />
        </Container>
      </section>
    </>
  );
}
