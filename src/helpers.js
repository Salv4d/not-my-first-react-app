function choice(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function remove(items, item) {
  const itemIdx = items.indexOf(item) >= 0;
  if (itemIdx >= 0) {
    items.splice(itemIdx, 1);
  }
  return items;
}

export { choice, remove };
