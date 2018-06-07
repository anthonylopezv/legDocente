'use strict'

module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define('usuario', {
    id_usuario: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    user_name: {
      type: DataTypes.STRING,
      required: true
    },
    pass: {
      type: DataTypes.STRING,
      required: true
    },
    // created_at: {
    //   type: DataTypes.DATE,
    //   allowNull: false
    // },
    // updated_at:  DataTypes.DATE
  }, {
    timestamps: false,
    paranoid: false,
    underscored: false,
    freezeTableName: true,
    tablename: 'usuario'
  });
  return Usuario;
};