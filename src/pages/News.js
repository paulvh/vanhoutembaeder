import React from 'react'
import Article from '../components/Article'

export default function News({ firestoreData }) {
  return (
    <main>
      {firestoreData.map(
        (doc) => doc.news && <Article key={doc.id} content={doc} />
      )}
    </main>
  )
}
