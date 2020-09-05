<template>
    <component
        :is="tag"
        :type="type"
        v-on="$listeners"
        :disabled="disableButton"
        :class="[btnClass, colorVariants]"
        :variant="variant"
        :variant-type="variantType"
        :size="size"
        :href="to"
    >
        <slot />
    </component>
</template>

<script>
export default {
    name: "LoadingButton",
    props: {
        tag: {
            type: String,
            default: "button"
        },
        disabled: {
            type: Boolean,
            default: false
        },
        variant: {
            type: String,
            default: "primary"
        },
        variantType: {
            type: String,
            default: "normal"
        },
        size: {
            type: String,
            default: "normal"
        },
        rounded: {
            type: String,
            default: "medium"
        },
        type: {
            type: String,
            default: ""
        },
        to: {
            type: String
        }
    },
    data() {
        return {
            loading: false,
            disableButton: this.disabled
        };
    },

    methods: {
        startLoading() {
            this.loading = true;
            this.disableButton = true;
        },
        stopLoading() {
            this.loading = false;
            this.disableButton = false;
        }
    },

    computed: {
        btnClass() {
            return {
                "base-spinner": this.loading == true,
                "cursor-not-allowed": this.disableButton == true,
                "base-button inline-flex align-middle align-items-center justify-center font-medium focus:outline-none border-2": true,

                "rounded-lg": this.rounded === "medium",
                "rounded-full": this.rounded === "large",

                "px-6 py-3": this.size == "normal",
                "px-4 py-2": this.size == "small"
            };
        },

        colorVariants() {
            console.log('this variant  inside   ',this.variant)
            console.log('this variantType  inside   ',this.variantType)
            switch (this.variant) {
                case "primary":
                    switch (this.variantType) {
                        case "normal":
                            switch (this.disableButton) {
                                case true:
                                    return "primary-blue-300 bg-blue-300 text-white";
                                    break;
                                default:
                                    break;
                            }
                            return "primary-blue bg-blue-600 hover:bg-blue-700 hover:border-blue-700 text-white";
                            break;
                        case "outline":
                            return "primary-blue-outline text-blue-500 hover:text-blue-700";
                            break;
                        default:
                            break;
                    }
                    break;
                case "danger":
                    switch (this.variantType) {
                        case "normal":
                            switch (this.disableButton) {
                                case true:
                                    return "border-red-300 bg-red-300 text-white";
                                    break;
                                default:
                                    break;
                            }
                            return "border-red-600 bg-red-600 hover:bg-red-700 hover:border-red-700 text-white";
                            break;
                        case "outline":
                            return "border-gray-200 text-red-500 hover:text-red-600";
                            break;
                        default:
                            break;
                    }
                    break;

                case "warning":
                    switch (this.variantType) {
                        case "normal":
                            return "warning-orange";
                            break;
                        case "outline":
                            return "warning-orange-outline";
                        default:
                            break;
                    }
                    break;

                case "success":
                    switch (this.variantType) {
                        case "normal":
                            switch (this.disableButton) {
                                case true:
                                    return "border-green-300 bg-green-300 text-white";
                                    break;
                                default:
                                    break;
                            }
                            return "border-green-600 bg-green-600 hover:bg-green-700 hover:border-green-700 text-white";
                            break;
                        case "outline":
                            return "border-2 border-gray-200 text-green-500 hover:text-green-700";
                            break;
                        default:
                            break;
                    }
                    break;

                case "white":
                    switch (this.variantType) {
                        case "normal":
                            return "border-white bg-white text-blue-600 hover:text-blue-800";
                            break;
                        default:
                            break;
                    }
                    break;

                case "secondary":
                    switch (this.variantType) {
                        case "outline":
                            return "border-gray-300 text-gray-500 hover:text-blue-500";
                            break;
                        default:
                            break;
                    }
                    break;

                default:
                    break;
            }
        }
    },
    updated () {
        console.log('this      ',this)
        console.log('this.variantType     ',this.variantType)
        console.log('this.variant     ',this.variant)

    }
};
</script>

<style>
.warning-orange {
    border: orange solid 5px;
    border-radius: 5px;
}
.warning-orange-outline {
    background-color: white;
    color: white;
    border: 2px solid orange; /* Green */
}
.danger-red {
    background-color: red;
    color: white;
    border: 2px solid red; /* Green */
}
.danger-red-outline {
    background-color: white;
    color: black;
    border: 2px solid red; /* Green */
}
.primary-blue {
    background-color: blue;
    color: white;
    border: 2px solid blue; /* Green */
}
.primary-blue-outline {
    background-color: white;
    color: black;
    border: 2px solid blue; /* Green */
}
.success-green {
    background-color: green;
    color: white;
    border: 2px solid green; /* Green */
}
.success-green-outline {
    background-color: white;
    color: black;
    border: 2px solid green; /* Green */
}

</style>