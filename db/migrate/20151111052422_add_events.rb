class AddEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.string :title
      t.string :description
      t.datetime :date
      t.string :location
      t.string :street
      t.string :city
      t.string :state
      t.string :postal_code

      t.timestamps null: false
    end
  end
end
