class Board < ApplicationRecord
	
	belongs_to :game
	has_many :squares, dependent: :destroy


end


