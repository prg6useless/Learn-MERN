const orderModel = require("./order.model");
const { v4: uuidv4 } = require("uuid");

const create = async (payload) => {
  payload.id = uuidv4();
  return await orderModel.create(payload);
};

const getById = async (id) => {
  const result = await orderModel.aggregate([
    {
      $match: {
        id,
      },
    },
    {
      $lookup: {
        from: "users",
        localField: "buyer",
        foreignField: "_id",
        as: "buyer",
      },
    },
    {
      $unwind: {
        path: "$buyer",
        preserveNullAndEmptyArrays: false,
      },
    },
    {
      $project: {
        "buyer.password": false,
        "buyer.roles": false,
        "buyer.isActive": false,
        "buyer.isEmailVerified": false,
        "buyer.createdAt": false,
        "buyer.updatedAt": false,
      },
    },
    {
      $lookup: {
        from: "movies",
        localField: "products.movie",
        foreignField: "_id",
        as: "products",
      },
    },
    {
      $project: {
        "products.slug": false,
        "products.createdAt": false,
        "products.updatedAt": false,
        "products.endDate": false,
      },
    },
  ]);
  return result[0];
};

const updateById = async (id, payload) => {
  const { status, ...rest } = payload;
  return await orderModel.findOneAndUpdate({ id }, rest, { new: true });
};

const list = async ({ page = 1, limit = 5, search }) => {
  // advanced operations -> pagination, sort, filter, search
  const query = [];

  // search
  if (search.id) {
    query.push({
      $match: {
        buyer: search.id,
      },
    });
  }

  // pagination
  query.push(
    {
      $facet: {
        metadata: [
          {
            $count: "total",
          },
        ],
        data: [
          {
            $skip: (+page - 1) * +limit, // +limit ->Number(limit)
          },
          {
            $limit: +limit,
          },
        ],
      },
    },
    {
      $addFields: {
        total: {
          $arrayElemAt: ["$metadata.total", 0],
        },
      },
    }
  );

  const result = await orderModel.aggregate(query);

  return {
    total: result[0]?.total || 0,
    orders: result[0]?.data,
    page: +page, //+page = Number(page)
    limit: +limit, //+limit = Number(limit)
  };
};

const changeStatus = async (id, payload) => {
  return await orderModel.findOneAndUpdate({ id }, payload, { new: true });
};

module.exports = { create, getById, updateById, list, changeStatus };
