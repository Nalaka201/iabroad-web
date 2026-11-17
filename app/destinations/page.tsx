import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { DestinationCard } from "@/components/cards/DestinationCard";
import { destinations } from "@/lib/data";

export const metadata = { title: "Study Destinations" };

export default function DestinationsPage() {
  return (
    <>
      <PageHero title="Study Destinations" breadcrumb="Destinations">
        <p>
          Six countries, each with its own strengths, costs and post-study work
          pathways. <Badge variant="sample">Sample data</Badge>
        </p>
      </PageHero>

      <Reveal className="py-24">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {destinations.map((d) => (
              <DestinationCard key={d.code} country={d} />
            ))}
          </div>
        </Container>
      </Reveal>

      <CtaBand />
    </>
  );
}
