<script src="./script.js"/>
<template>
    <section class="home-container">
        <button @click="decrement" class="counter-button">-</button>
        <h1 class="text">{{ counter }}</h1>
        <button @click="increment" class="counter-button">+</button>
    </section>
</template>