<template>
   <div>
      <nav className=" flex items-center justify-between h-20 max-w-6xl mx-auto">
        <router-link to="/">
          <div className=" ml-5">
            <h1 className=" text-red-900 font-bold text-xl sm:text-2xl md:text-3xl tracking-wider uppercase">react redux shopping cart</h1>
          </div>
        </router-link>
        <ul className=" flex items-center space-x-6 text-gray-600 font-semibold">
          <router-link to="/">
            <li>Home</li>
          </router-link>
          <router-link to="/cart">
            <li>Cart</li>
          </router-link>
        </ul>
      </nav>
    </div>
</template>


