class AddPositionToSquare < ActiveRecord::Migration[5.0]
  def change
  	add_column :squares, :position, :string
  end
end
