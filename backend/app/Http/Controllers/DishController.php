<?PHP

namespace App\Http\Controllers;

use App\Models\Dish;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

class DishController extends Controller
{
    use AuthorizesRequests;

    public function index()
    {
        return Dish::where('user_id', Auth::id())->get();
    }

    public function store(Request $request)
    {
        $request->validate([
            'type' => 'required|string',
            'name' => 'required|string',
            'restaurant' => 'required|string',
            'location' => 'required|string',
            'detail_link' => 'required|url',
        ]);

        return Dish::create(array_merge(
            $request->all(),
            ['user_id' => Auth::id()]
        ));
    }

    public function show(Dish $dish)
    {
        return $dish;
    }

    public function update(Request $request, Dish $dish)
    {
        $this->authorize('update', $dish);
        $dish->update($request->all());
        return $dish;
    }

    public function destroy(Dish $dish)
    {
        $this->authorize('delete', $dish);
        $dish->delete();
        return response()->noContent();
    }
}
