class PolindromController < ApplicationController
  def input
  end

  def find_them_all(n)
    0.upto(n).select do |x|
			(flag = is_palindrome?(x)) && flag == is_palindrome?(x**2)
    end
  end

  def is_palindrome?(num)
    num.to_s.eql?(num.to_s.reverse)
  end

  def output
    n = (buf = params[:n].to_f).zero? && !params[:n].eql?('0') ? -1 : buf
    @result_array = find_them_all(n)
    @num = @result_array.length

    respond_to do |format|
      format.html
      format.json do
        render json:
          { array: @result_array, number: @num }
      end
    end
  end
end
