export default function getFirstHeading(top, height, headings) {
  let lastAnchor = "";
  for (let i = 0; i < headings.length; i += 1) {
    const heading = headings[i];
    if (heading.offsetTop > top) {
      if (heading.offsetTop < top + height) {
        return heading.anchor;
      }

      return lastAnchor;
    }

    lastAnchor = heading.anchor;
  }

  return lastAnchor;
}
