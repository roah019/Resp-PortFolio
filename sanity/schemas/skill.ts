export default ({
    name: 'skill',
    title: 'Skill',
    type: 'document',
    fields: [ 
      {
        name: "title",
        title: "Title",
        type: "string"
       },
       {
        name: "progress",
        title: "Progress",
        type: "number",
        description: "Purpose of skill from 0 to 100%",
        validation: (Rule) => Rule.min(0).max(100),
       },
       {
        name: "companyImage",
        title: "CompanyImage",
        type: "image", options: {
          hotspot: true,
       },
      },
      
    ],
  })