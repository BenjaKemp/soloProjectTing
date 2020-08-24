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
            switch (this.variant) {
                case "primary":
                    switch (this.variantType) {
                        case "normal":
                            switch (this.disableButton) {
                                case true:
                                    return "border-blue-300 bg-blue-300 text-white";
                                    break;
                                default:
                                    break;
                            }
                            return "border-blue-600 bg-blue-600 hover:bg-blue-700 hover:border-blue-700 text-white";
                            break;
                        case "outline":
                            return "border-gray-200 text-blue-500 hover:text-blue-700";
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
                            return "border-orange-600 bg-orange-600 hover:bg-orange-700 hover:border-orange-700 text-white";
                            break;
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
    }
};
</script>