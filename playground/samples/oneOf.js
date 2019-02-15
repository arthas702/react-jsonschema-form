module.exports = {
  schema: {
    definitions: {
      TypeA: {
        type: "object",
        properties: {
          a: {
            type: "number",
          },
        },
      },
      TypeB: {
        type: "object",
        properties: {
          b: {
            type: "string",
          },
        },
      },
    },
    type: "object",
    oneOf: [
      {
        properties: {
          lorem: { $ref: "#/definitions/TypeA" },
        },
        required: ["lorem"],
      },
      {
        properties: {
          ipsum: { $ref: "#/definitions/TypeB" },
        },
        required: ["ipsum"],
      },
    ],
  },
  formData: {
    ipsum: {
      b: "wwww",
    },
  },
};
