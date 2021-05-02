import { db } from '../firebase/firebase'

export default function UploadToFirestore(values, user, imageUrl = '') {
  db.collection('content').add({
    date: values.date,
    news: values.news,
    width: Number(values.width),
    height: Number(values.height),
    src: imageUrl,
  })
}
