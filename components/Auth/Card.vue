<template>
  <div>
    <div class="card">
      <div class="card-body">
        <h3>{{ authState }}</h3>
        <div class="login">
          <input type="email" placeholder="Email" />
          <input type="Password" placeholder="Password" />
        </div>
        <button class="btn">Submit</button>
        <p @click="toggleAuthState">
          {{
            authState === "login"
              ? "Don`t Have an account? Create one now"
              : "Aready have an account? Go ahead an log in"
          }}
        </p>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
const authState = ref<"login" | "signup">("login");
const toggleAuthState = () => {
  if (authState.value === "login") authState.value = "signup";
  else authState.value = "login";
};
</script>
<style scoped lang="scss">
.card {
  padding: 1rem;
  width: 25rem;
  h3 {
    font-size: 1.75rem;
    text-transform: capitalize;
  }
  .login {
    display: flex;
    flex-direction: column;
    input {
      border: 1px solid gray;
      border-radius: 5px;
      margin-top: 10px;
      &:focus-visible {
        outline: none;
      }
    }
  }
  p {
    color: blue;
    font-size: 0.75rem;
    cursor: pointer;
    width: 250px;
    margin-top: 20px;
  }
  .btn {
    border: 1px solid gray;
    margin-top: 10px;
  }
}
</style>
