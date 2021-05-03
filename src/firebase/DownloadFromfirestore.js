import { db } from './firebase'
import { useState, useEffect } from 'react'

export default function DownloadFromFirestore() {
  const [content, setContent] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    db.collection('content').onSnapshot((snapshot) => {
      const allContentInCollection = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
      setContent(allContentInCollection)
      setLoading(false)
    })
  }, [])
  return [content, loading]
}
