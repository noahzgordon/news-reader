class AddFavoriteToFeeds < ActiveRecord::Migration
  def change
    add_column :feeds, :favorite, :boolean, default: false
  end
end
