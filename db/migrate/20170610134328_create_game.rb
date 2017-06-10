class CreateGame < ActiveRecord::Migration[5.0]
  def change
    create_table :games do |t|
    	
    	t.boolean, :x_is_next, default: true
    end
  end
end
