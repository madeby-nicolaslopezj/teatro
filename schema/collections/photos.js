Photos = new orion.collection('photos', {
  singularName: 'foto',
  pluralName: 'fotos',
  title: 'Fotos',
  link: {
    title: 'Fotos'
  },
  tabular: {
    columns: [
      orion.attributeColumn('image', 'image', 'Foto')
    ]
  }
});

Photos.attachSchema(new SimpleSchema({
  image: orion.attribute('image', {
    label: 'Imagen'
  }),
  createdAt: orion.attribute('createdAt')
}))
