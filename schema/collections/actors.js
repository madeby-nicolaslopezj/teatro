Actors = new orion.collection('actors', {
  singularName: 'integrante',
  pluralName: 'integrantes',
  title: 'Integrantes',
  link: {
    title: 'Integrantes'
  },
  tabular: {
    columns: [
      { data: 'name', title: 'Nombre' }
    ]
  }
});

Actors.attachSchema(new SimpleSchema({
  name: {
    type: String,
    label: 'Nombre'
  },
  slug: {
    type: String,
    label: 'URL',
    regEx: /^[a-z0-9A-Z_-]+$/,
  },
  image: orion.attribute('image', {
    label: 'Imagen'
  }),
  description: {
    type: String,
    autoform: {
      type: 'textarea',
      rows: 6
    }
  }
}))
