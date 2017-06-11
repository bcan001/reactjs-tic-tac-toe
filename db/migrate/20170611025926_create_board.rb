class CreateBoard < ActiveRecord::Migration[5.0]
  def change
    create_table :boards do |t|
    	t.string :winner
    	t.boolean :x_is_next, default: true
    	t.integer :game_id
    end
  end
end
