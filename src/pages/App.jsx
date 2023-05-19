import { useState } from "react";
import { faker } from "@faker-js/faker";
import { useCart } from "../context/Cart";
import { Button, Card, CardGroup, Image, Input } from "semantic-ui-react";

/**
 * ToDo's:
 * 1 - Add/Remove a product to the shopping cart
 * 2 - Compute total cost
 *
 * If we still have time:
 *   c. Can we filter the products?
 *   a. Can we make a reusable component for displaying a product?
 */

export default function App() {
  const [search, setSearch] = useState();
  const [filter, setFilter] = useState();

  const { products, addProduct, removeProduct } = useCart();

  return (
    <div style={{ padding: 32 }}>
      <Input
        fluid
        value={filter}
        placeholder="Filter by name..."
        onChange={(e) => setSearch(e.target.value)}
        action={<Button onClick={() => console.log(filter)}>Search</Button>}
      />

      <CardGroup centered style={{ marginTop: 16 }}>
        {mockData.map((product) => (
          <Card key={product.id}>
            <Image
              wrapped
              ui={false}
              src="https://designshack.net/wp-content/uploads/placeholder-image.png"
            />
            <Card.Content>
              <Card.Header>{product.name}</Card.Header>
              <Card.Meta>{product.category}</Card.Meta>
              <Card.Description textAlign="left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Card.Description>
            </Card.Content>

            <Card.Content>
              <span style={{ marginRight: 8 }}>$ {product.cost}</span>

              <Button
                fluid
                primary
                disabled={products.find((p) => p.id === product.id)}
              >
                Add
              </Button>
              <Button
                fluid
                disabled={!products.find((p) => p.id === product.id)}
              >
                Remove
              </Button>
            </Card.Content>
          </Card>
        ))}
      </CardGroup>

      <div
        style={{
          right: 32,
          bottom: 32,
          position: "fixed",
          display: "flex",
          flexDirection: "column"
        }}
      >
        <span style={{ backgroundColor: "white" }}>Total: TODO</span>
        <Button primary>Proceed to Checkout</Button>
      </div>
    </div>
  );
}

const mockData = [...Array(20)].map((_, idx) => ({
  cost: 1.99 + idx,
  id: String(idx),
  name: faker.commerce.productName(),
  category: faker.commerce.department()
}));
