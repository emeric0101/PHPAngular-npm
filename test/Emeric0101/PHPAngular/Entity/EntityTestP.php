<?php

namespace Emeric0101\PHPAngular\Entity;

/**
 * EntityTestP
 */
class EntityTestP
{
    /**
     * @var integer
     */
    private $id;

    /**
     * @var string
     */
    private $test;


    /**
     * Get id
     *
     * @return integer
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set test
     *
     * @param string $test
     *
     * @return EntityTestP
     */
    public function setTest($test)
    {
        $this->test = $test;

        return $this;
    }

    /**
     * Get test
     *
     * @return string
     */
    public function getTest()
    {
        return $this->test;
    }
}
