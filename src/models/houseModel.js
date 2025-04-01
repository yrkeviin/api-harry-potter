const pool = require("../config/database");
const { deleteWizard } = require("./wizardModel");

const getHouses = async () => {
    const result = await pool.query("SELECT * FROM houses");
    return result.rows;
};

const getHouseById = async (id) => {
    const result = await pool.query("SELECT * FROM houses WHERE id = $1", [id]);
    return result.rows[0];
};

const createHouse = async (name, founder) => {
    const result = await pool.query(
        "INSERT INTO houses (name, founder) VALUES ($1, $2) RETURNING *",
        [name, founder]
    );
    return result.rows[0];
};

const updateHouse = async (id, name, founder) => {
    const result = await pool.query(
        "UPDATE houses SET name = $1, founder = $2 WHERE id = $3 RETURNING *",
        [name, founder, id]
    );
    return result.rows[0];
};

const deleteHouse = async (id) => {
    const result = await pool.query("DELETE FROM houses WHERE id = $1 RETURNING *", [id]);
    return result.rows[0];
};

module.exports = { getHouses, getHouseById, createHouse, updateHouse, deleteWizard, deleteHouse };
