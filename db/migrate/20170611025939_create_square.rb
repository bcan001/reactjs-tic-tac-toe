class CreateSquare < ActiveRecord::Migration[5.0]
  def change
    create_table :squares do |t|
    	t.integer :board_id
    	t.string :value
    end
  end
end
