<template>
  <div class="container">
    <div class="image-container">
      <img src="https://i.postimg.cc/FH3qcbTZ/IMG-7811-1-removebg-preview.png=img">
    </div>
   <div class="text-contianer">
     <h1> I'm Sisipho Mafrika<br> Aspiring Developer</h1>
    <p>🚀 Welcome to my coding odyssey! 🚀

Embark on this thrilling journey with me as I navigate the intricate realms of software development. 🌐 Here, I share regular updates on my projects and the exhilarating challenges I encounter along the way.

🛠️ Join me in the process of learning, building, and growing in the ever-evolving landscape of code. 🌱 Let's explore the fascinating world of software development together!

#CodeExplorer #LearningInProgress #SoftwareJourney</p>
     <button>View my work</button>
   </div>
  </div>
</template>
<script>
</script>
<style scope>
.container {
 display: flex;
 justify-content: space-between;
 align-items: center;
 height: 600px;
}
.image-container {
 margin-left: 50px;
}
.text-container {
 max-width: 40%;
 margin-top: 100px;
}
.img {
 max-width: 100%;
 height: auto;
}
h1{
  color: #84AF9B;
  font-family: 'Inter', sans-serif;
}
button{
  background-color: #84AF9B;
  box-shadow: 0 0 20px #84AF9B;
}
.text-container {
            text-align: center;
            animation: fadeInUp 1s ease-out;
        }

        h1 {
            font-size: 2.5em;
            margin-bottom: 10px;
            color: #333;
        }

        p {
            font-size: 1.2em;
            color: #666;
        }

        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
</style>

