class GamesController < ApplicationController
	skip_before_action :verify_authenticity_token

	def index
		# @game = {board: [nil,nil,nil,nil,nil,nil,nil,nil,nil]}

		if params["new_game"]
			Game.first.destroy if Game.first

			@game = Game.new(name: 'New Game')
			@board = @game.build_board

			@game.save
			@board.save

			@square_count = 0
			@squares = []
			9.times do
				@square = @board.squares.build(position: @square_count, value: nil)
				@square_count += 1
				@square.save
				@squares << @square.value
			end

			@game = {board: @squares}

		else
			@game = Game.first
			@board = @game.board

			@square_count = 0
			@squares = []
			@board.squares.each do |square|
				@squares << square.value
			end

			@game = {board: @squares}
		end
		
	end

	def create
		# binding.pry
		# params[:position] # 0, 1,2 etc.
		# params[:square] # X or O


		Square.find_by(position: params[:position]).update_attributes(value: params[:square])


		respond_to do |format|
			format.html
			format.js
			format.json { render json: {} }
		end

	end

	private


end


# https://facebook.github.io/react/tutorial/tutorial.html
# https://codepen.io/gaearon/pen/oWWQNa?editors=0010
