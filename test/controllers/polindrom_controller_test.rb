require 'test_helper'

class PolindromControllerTest < ActionDispatch::IntegrationTest
  test "should get input" do
    get '/'
    assert_response :success
  end

  test "should get output" do
    get '/output'
    assert_response :success
  end

  test "should get 4" do
    get '/output', n: 5
    assert_equal assigns[:num], 4
  end

  test "should get 0 if negative" do
    get '/output', n: -5
    assert_equal assigns[:num], 0
  end

  test "should get 0 if letter" do
    get '/output', n: 'a'
    assert_equal assigns[:num], 0
  end
  
  test "json should get nil if strange name" do
    get '/output.json', n: ''
    assert_equal assigns[:csi], nil
  end
  test "json should get 4" do
    get '/output.json', n: 5
    assert_equal assigns[:num], 4
  end
end
