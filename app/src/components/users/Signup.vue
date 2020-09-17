<template>
  <v-app id="inspire">
    <v-main>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card class="elevation-12">
              <v-toolbar
                color="primary"
                dark
                flat
              >
                <v-toolbar-title>Signup form</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <v-btn
                      icon
                      large
                      target="_blank"
                      v-on="on"
                      @click="existingBool"
                    >
                      <v-icon>mdi-code-tags</v-icon>
                    </v-btn>
                  </template>
                  <span>Source</span>
                </v-tooltip>
              </v-toolbar>
              <v-card-text>
                <v-form v-if="!existinguser">
                  <v-text-field
                    label="Signup"
                    name="login"
                    prepend-icon="mdi-account"
                    type="text"
                  ></v-text-field>

                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    prepend-icon="mdi-lock"
                    type="password"
                  ></v-text-field>
                </v-form>
                <v-form v-if="existinguser">
                  <v-text-field
                    label="username"
                    name="username"
                    prepend-icon="mdi-account"
                    type="text"
                    v-model="userData.username"
                  ></v-text-field>
                  <v-text-field
                    label="First name"
                    name="firstName"
                    prepend-icon="mdi-account"
                    type="text"
                    v-model="userData.firstName"
                  ></v-text-field>
                  <v-text-field
                    label="Surname"
                    name="lastName"
                    prepend-icon="mdi-account"
                    type="text"
                    v-model="userData.lastName"
                  ></v-text-field>
                  <v-text-field
                    label="email"
                    name="email"
                    prepend-icon="mdi-account"
                    type="text"
                    v-model="userData.email"
                  ></v-text-field>

                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    prepend-icon="mdi-lock"
                    type="password"
                    v-model="userData.password"
                  ></v-text-field>
                </v-form>   
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="checkForm">Signup</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
       existing: true,
       userData: {
         firstName: '',
         lastName: '',
         username: '',
         password: '',
         email: '',
       }
    }),
    methods: {
      existingBool () {
        this.existing = !this.existing
      },
    existinguser () {
      return this.existing
    },
    async checkForm () {
      // firstName, lastName, email, password
      console.log('this is iuserdata    ',this.userData)
      await this.$store.dispatch('users/signup', this.userData)

    },
  }
}
</script>