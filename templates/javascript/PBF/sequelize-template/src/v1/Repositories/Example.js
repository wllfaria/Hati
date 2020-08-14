const { Model, DataTypes } = require('sequelize')

/**
 * Every sequelize repository should extends base class Model
 * provided by sequelize.
 *
 * this class bellow instantiate and handle the Example table
 * on the database.
 */
class Example extends Model {
	/**
	 * @param { repository } repository
	 * should always be the sequelize connection instance.
	 * we @override default init method in order to make it work
	 * with ES6 classes.
	 */
	static init(repository) {
		return super.init(
			{
				/**
				 * @property { id } id
				 * is a column definition for Example table.
				 */
				id: {
					/**
					 * @property { type } DataTypes
					 * is the type definitions for the SQL column.
					 * you can find more information about sequelize DataTypes in the docs:
					 * https://sequelize.org/master/manual/model-basics.html#data-types
					 */
					type: DataTypes.INTEGER,
					allowNull: false,
					autoIncrement: true,
					unique: true,
					primaryKey: true
				},
				example: {
					type: DataTypes.STRING,
					allowNull: false
				}
			},
			{
				/**
				 * @property { sequelize } repository
				 * after defining all our columns, we should always pass the current connection
				 * instance to sequelize.
				 */
				sequelize: repository
			}
		)
	}
}

module.exports = Example
