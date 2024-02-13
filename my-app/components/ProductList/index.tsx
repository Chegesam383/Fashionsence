import { products } from "@/lib/utils";
import ProductCard from "../ProductCard";
import Container from "../container";

export default function () {
  return (
    <Container>
      <div className="md:grid grid-cols-2 md:grid-cols-3 lg: lg:grid-cols-4 gap-4 mt-20">
        {products.map((product) => (
          <ProductCard {...product} />
        ))}
      </div>
    </Container>
  );
}
