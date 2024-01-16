import builder from '@builder.io/sdk-vue';

const API_KEY = process.env.VUE_APP_BUILDER_IO_API_KEY; // Replace with your actual API key
builder.init(API_KEY);

export default builder;
