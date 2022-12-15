export function genOrder(data) {
  const bun = data.find((item) => item.name === "Краторная булка N-200i");
  const sauce = data.find(
    (item) => item.name === "Соус традиционный галактический"
  );
  const meat = data.find(
    (item) => item.name === "Мясо бессмертных моллюсков Protostomia"
  );
  const tree = data.find((item) => item.name === "Плоды Фалленианского дерева");
  const tors = data.find(
    (item) => item.name === "Хрустящие минеральные кольца"
  );

  return [bun, sauce, meat, tree, tors, tors];
}