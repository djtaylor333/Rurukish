class DeleteUsers < ActiveRecord::Migration
  def up
    drop_table :users
  end

  def down
    create_table :users do |t|
      t.string :first_name
      t.string :last_name
      t.string :email
      t.string :password

      t.timestamps null: false
    end
  end
end
