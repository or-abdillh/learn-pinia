<template>
   <h1>List Buku</h1>
   <ol>
      <template v-for="(book, index) in allBooks" :key="index">
         <li>
            {{ book.title }} - {{ book.author }} - {{ book.pages }} halaman
            <p @click="deleteBook(book.id)">
               <a href="#">Hapus</a>
            </p>
         </li>
      </template>
   </ol>

   <h1>Tambah Buku :</h1>
   <ul>
      <li>
         <input v-model="newBook.judul" type="text" placeholder="Judul Buku"/>
         <input v-model="newBook.penulis" type="text" placeholder="Penulis Buku"/>
         <input v-model="newBook.halaman" type="number" placeholder="Jumlah Halaman"/>
         <br />
         <button @click="addBook()" type="button">Tambah Buku</button>
      </li>
   </ul>
</template>

<script setup>
   import { useBooks } from '/src/store/Books.js'
   import { computed, reactive } from 'vue'
   
   const book = useBooks()
   const allBooks = computed(() => book.allBooks)
   const idBook = computed(() => book.generateIdBook())
   
   //Form buku baru
   const newBook = reactive({
      judul: '',
      penulis: '',
      halaman: ''
   })
   
   //Push newBook to state
   const addBook = () => book.add({
      title: newBook.judul,
      author: newBook.penulis,
      pages: newBook.halaman
   })
   
   //Delete book
   const deleteBook = id => {
      book.deleteBook(id)
   }
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding: 1rem 2rem;
}

ul {
   list-style: none;
   padding: 0;
}

input, button {
   margin-top: .75rem;
   padding: .55rem .3rem;
}
</style>
