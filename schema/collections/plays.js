Plays = new orion.collection('plays', {
  singularName: 'obra',
  pluralName: 'obras',
  title: 'Obras',
  link: {
    title: 'Obras'
  },
  tabular: {
    columns: [
      { data: 'name', title: 'Nombre' },
      { data: 'releaseDate', title: 'Año' }
    ]
  }
});

Plays.attachSchema(new SimpleSchema({
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
    label: 'Imagen',
    optional: true
  }),
  releaseDate: {
    type: Number,
    label: 'Año de estreno'
  },
  shortDescription: {
    type: String,
    autoform: {
      type: 'textarea',
      rows: 3
    }
  },
  description: orion.attribute('froala', {
    label: 'Descripción'
  }),
  images: orion.attribute('images', {
    label: 'Galería',
    optional: true
  }),
  createdAt: orion.attribute('createdAt')
}))
