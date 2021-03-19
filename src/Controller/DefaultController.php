<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DefaultController extends AbstractController
{
    /**
     * @Route("/", name="default")
     */
    public function index(): Response
    {

        return $this->render('page/index.html.twig',[]);
    }

    /**
     * @Route("/api/products", name="products", methods={"GET"})
     */
    public function getUsers():JsonResponse
    {

        $products = [
            [
                'id'=>1,
                'name'=>'',
                'price'=>12.99,
                'inStock'=> 6,
                'rating'=>3.5,
                'numRating'=>14,
                'colors'=>[
                    '#000',
                    '#f00',
                    '#0f0',
                    '#00f',
                    '#fff'
                ],
                'deliveryIn'=>2,
                'img'=>'/images/',
                'description'=>'Praesent sodales vulputate sem, eu porttitor odio aliquet eu. Integer ut sapien a enim commodo tempus et a mauris. Fusce metus erat, faucibus et lobortis a, molestie vitae erat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque sit amet viverra purus. Nam vitae urna vel libero euismod auctor. Cras sit amet lacus tortor. Suspendisse potenti. Suspendisse potenti. Integer tincidunt accumsan mollis.',

            ],

        ];

        return new JsonResponse($products);

    }
}
