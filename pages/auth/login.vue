<template>
  <div class="w-lg-500px p-10">
    <Form
      class="form w-100"
      id="kt_login_signin_form"
      @submit="handleSubmit"
      :validation-schema="login"
      :initial-values="{ email: 'admin@etendering.com', password: '123456' }"
    >
      <div class="text-center mb-10">
        <!--begin::Title-->
        <h1 class="text-gray-900 mb-3">Sign In</h1>
        <!--end::Title-->

        <!--begin::Link-->
        <div class="text-gray-500 fw-semibold fs-4">
          New Here?

          <router-link to="/sign-up" class="link-primary fw-bold">
            Create an Account
          </router-link>
        </div>
        <!--end::Link-->
      </div>

      <div class="mb-10 bg-light-info p-8 rounded">
        <div class="text-info">
          Use account <strong>admin@demo.com</strong> and password
          <strong>demo</strong> to continue.
        </div>
      </div>

      <div class="fv-row mb-10">
        <!--begin::Label-->
        <label class="form-label fs-6 fw-bold text-gray-900">Email</label>
        <!--end::Label-->

        <!--begin::Input-->
        <Field
          tabindex="1"
          class="form-control form-control-lg form-control-solid"
          type="text"
          name="email"
          autocomplete="off"
        />
        <!--end::Input-->
        <div class="fv-plugins-message-container">
          <div class="fv-help-block">
            <ErrorMessage name="email" />
          </div>
        </div>
      </div>

      <div class="fv-row mb-10">
        <!--begin::Wrapper-->
        <div class="d-flex flex-stack mb-2">
          <!--begin::Label-->
          <label class="form-label fw-bold text-gray-900 fs-6 mb-0"
            >Password</label
          >
          <!--end::Label-->

          <!--begin::Link-->
          <router-link to="/password-reset" class="link-primary fs-6 fw-bold">
            Forgot Password ?
          </router-link>
          <!--end::Link-->
        </div>
        <!--end::Wrapper-->

        <!--begin::Input-->
        <Field
          tabindex="2"
          class="form-control form-control-lg form-control-solid"
          type="password"
          name="password"
          autocomplete="off"
        />
        <!--end::Input-->
        <div class="fv-plugins-message-container">
          <div class="fv-help-block">
            <ErrorMessage name="password" />
          </div>
        </div>
      </div>

      <div class="text-center">
        <button
          tabindex="3"
          type="submit"
          ref="submitButton"
          id="kt_sign_in_submit"
          class="btn btn-lg btn-primary w-100 mb-5"
        >
          <span class="indicator-label"> Continue </span>

          <span class="indicator-progress">
            Please wait...
            <span
              class="spinner-border spinner-border-sm align-middle ms-2"
            ></span>
          </span>
        </button>
      </div>
    </Form>
  </div>
</template>

<script lang="ts" setup>
import * as Yup from "yup";

definePageMeta({
  layout: "auth",
});

const login = Yup.object().shape({
  email: Yup.string().email().required().label("Email"),
  password: Yup.string().min(4).required().label("Password"),
});

async function handleSubmit(values: any) {
  console.log(values);
}
</script>

<style></style>
