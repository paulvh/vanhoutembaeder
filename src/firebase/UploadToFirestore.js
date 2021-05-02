import { db } from './firebase'

export default function UploadToFirestore(values, imageUrl = '') {
  db.collection('content').add({
    date: values.date,
    news: values.news,
    width: Number(values.width),
    height: Number(values.height),
    src: imageUrl,
  })
}
