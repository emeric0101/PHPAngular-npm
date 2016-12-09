<?php

namespace LIM\MoreSalle\Entity;
use Emeric0101\PHPAngular\Entity\EntityAbstract;
/**
 * User
 *
 * @Table(name="reservationressource")
 * @Entity(repositoryClass="LIM\MoreSalle\Repository\ReservationRessourceRepository")
 */
class ReservationRessource extends EntityAbstract
{
    /**
     * @var int
     *
     * @Column(name="id", type="integer")
     * @Id
     * @GeneratedValue(strategy="AUTO")
     */
    private $id;
    /**
    * @ManyToOne(targetEntity="LIM\MoreSalle\Entity\Ressource", inversedBy="reservationRessource")
    * @JoinColumn(name="reservation_id", referencedColumnName="id")
    */
    private $reservation;
    public function setReservation($r) {$this->reservation = r;}
    public function getReservation() {return $this->reservation;}
    /**
    * @ManyToOne(targetEntity="LIM\MoreSalle\Entity\Reservation")
    */
    private $ressource;
    public function setRessource($r) {
        $this->ressource = $r;
    }
    public function getRessource() {
        return $this->ressource;
    }
    /**
     * @var int
     *
     * @Column(name="quantity", type="integer")
     */
    private $quantity;
    /**
     * @var int
     *
     * @Column(name="start", type="datetime")
     */
    private $start;
    /**
     * @var int
     *
     * @Column(name="end", type="datetime")
     */
    private $end;

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
         * Set quantity
         *
         * @param integer $quantity
         *
         * @return ReservationRessource
         */
        public function setQuantity($quantity)
        {
            $this->quantity = $quantity;

            return $this;
        }

        /**
         * Get quantity
         *
         * @return integer
         */
        public function getQuantity()
        {
            return $this->quantity;
        }

        /**
         * Set start
         *
         * @param \DateTime $start
         *
         * @return ReservationRessource
         */
        public function setStart($start)
        {
            $this->start = $start;

            return $this;
        }

        /**
         * Get start
         *
         * @return \DateTime
         */
        public function getStart()
        {
            return $this->start;
        }

        /**
         * Set end
         *
         * @param \DateTime $end
         *
         * @return ReservationRessource
         */
        public function setEnd($end)
        {
            $this->end = $end;

            return $this;
        }

        /**
         * Get end
         *
         * @return \DateTime
         */
        public function getEnd()
        {
            return $this->end;
        }

}
