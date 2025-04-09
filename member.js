function skillsMembers() {
  return {
    name: "skillsMembers",
    title: "Skills Members",
    type: "document",
    fields: [
      {
        name: "name",
        title: "Name",
        type: "string",
      },
      {
        name: "image",
        title: "Image",
        type: "image",
        options: {
          hotspot: true,
        },
      },
      {
        name: "description",
        title: "Description",
        type: "text",
      },
    ],
  };
}