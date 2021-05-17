<template>
  <div class="error">
    <div class="errorlist">
       <img src="~@/assets/img/academy/ERROR.png" alt="">
    </div>
    <div class="errorTitle">
      <p class="Oops">
        Oops! We can't find the page you're looking for. Maybe one of the following links
        will help you
      </p>
      <p>* Explore selected products <a href="/test-products">in All Departments.</a></p>
      <p>* Visit <a href="/account/overview">My Profile. </a></p>

      <div class="errorButton">
        <p><a href="/">Go to homepage </a></p>
        <p><a href="/contact-us"> Contact our support </a></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props: ['error']
}
</script>

<style lang="scss">
html,
p {
  margin: 0;
  padding: 0;
}

.error {
  width: 90%;
  margin: 20px auto;
  padding: 140px 0;
  background-color: white;
  .errorlist {
    width: 50%;
    margin: 0 auto 25px;
    text-align: center;
    img {
      width: 100%;
    }
  }
  .errorButton>p:nth-of-type(1)>a {
    color: #FFFFFF;
    text-decoration: none;
}

.errorButton>p:nth-of-type(2)>a {
    color: #FFAF2B;
    text-decoration: none;
}

.errorButton>p:nth-of-type(1) {
    background: #FFAF2B;
}

.errorButton>p:nth-of-type(2) {
    border: 1px solid #FFAF2B;
    margin-left: 15px;
}
  .errorTitle {

    width: 90%;
    margin: 0 auto;
     .errorButton {
    display: flex;
    margin-top: 30px;
    justify-content: center;
    justify-content: center;
    align-items: center;
    p{
         font-size: 14px;
    font-weight: 400;
    cursor: pointer;
    padding: 0 10px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    border-radius: 5px;
    }
     }
    
.Oops~p {
    font-size: 14px;
    font-weight: 400;
    color: #666666;
}
    .Oops {
      font-size: 16px;
      margin-bottom: 15px;

      font-weight: 500;
      margin: 20px 0;
    }
    a {
      color: #ffaf2b;
    }
  }
}

</style>
